import React from 'react';
import {StyleSheet, ScrollView, View, Dimensions } from 'react-native'
import { Layout, Select, SelectItem } from '@ui-kitten/components';
import { GetRequest, GetMovieRequest } from '../utils/apiRequester'
import { GetCategoryUrl, GetMovieListFromGenre } from '../utils/apiUrls'
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieCard from '../components/movieList/MovieCard';

const { width, height } = Dimensions.get("window");

class MovieListScreen extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            selectedIndex : 0,
            displayValue : '',
            GenresList : '',
            MoviesList : ''
        }
    }

    setSelectedIndex = async(index) => {
        await this.setState({
            selectedIndex:index,
            displayValue : this.state.GenresList[index - 1].name,
            MoviesList : (index !==0 ?  await GetMovieRequest(await GetMovieListFromGenre(this.state.GenresList[index-1].id)) : '')
            
        })
    }

    async componentDidMount() {
        this.setState({
            GenresList : await GetRequest(await GetCategoryUrl())
        })
    }

    renderOption = (data) => (
        <SelectItem key={data.id} title={data.name}/>
    );

    renderMovies = (data) => (
        <MovieCard key={data.id} name={data.original_title} desc={data.overview} rDate={data.release_date} imagePath={data.poster_path}/>
    );

    render(){
    let selectOptions;
    if(this.state.GenresList != ''){
        selectOptions = this.state.GenresList.map(this.renderOption)
    }

        return (
        <SafeAreaView>
            <ScrollView>
                <Layout level='1'>  
                    <Select
                    placeholder="Kategori Seçiniz"
                    value={this.state.displayValue}
                    selectedIndex={this.state.selectedIndex}
                    onSelect={index => this.setSelectedIndex(index)}>
                    {selectOptions}        
                    </Select>
                </Layout>
                <View style={styles.mainView}>
                    {this.state.MoviesList !== '' ? this.state.MoviesList.map(this.renderMovies) : <View></View>}
                </View>
            </ScrollView>
        </SafeAreaView>
        )};
    };

const styles = StyleSheet.create({
    mainView: {
        flexDirection:'row',
        flexWrap:'wrap'
    }
});

export default MovieListScreen;