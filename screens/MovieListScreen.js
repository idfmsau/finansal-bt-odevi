import React from 'react';
import {StyleSheet, ScrollView, View, Dimensions, DatePickerAndroid } from 'react-native';
import { connect } from 'react-redux';
import { Layout, Select, SelectItem } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieCard from '../components/movieList/MovieCard';
import { LoadingPage, ChangeGenreIndex } from '../store/actions/MovieListAction'

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
    
    setSelectedIndex = (index) => {
        this.props.ChangeGenreIndex(index,this.props.GenresList[index - 1].name, this.props.GenresList[index-1].id)
    }

    componentDidMount() {
        this.props.LoadingPage()
    }
    

    renderOption = (data) => (
        <SelectItem key={data.id} title={data.name}/>
    );

    renderMovies = (data) => (
        <MovieCard key={data.id} movieId={data.id} name={data.original_title} desc={data.overview} rDate={data.release_date} imagePath={data.poster_path}/>
    );

    render(){
    let selectOptions;
    if(this.props.GenresList != undefined && this.props.GenresList != '' ){
        selectOptions = this.props.GenresList.map(this.renderOption)
    }

        return (
        <SafeAreaView>
            <ScrollView>
                <Layout level='1'>  
                    <Select
                    placeholder="Kategori Seçiniz"
                    value={this.props.displayValue}
                    selectedIndex={this.props.selectedIndex}
                    onSelect={index => this.setSelectedIndex(index)}>
                    {selectOptions}        
                    </Select>
                </Layout>
                <View style={styles.mainView}>
                    {(this.props.MoviesList != undefined &&  this.props.MoviesList != '') ? this.props.MoviesList.map(this.renderMovies) : <View></View>}
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

const mapStateToProps = ({ MovieListResponse })=>{
    const {selectedIndex, displayValue, GenresList, MoviesList} = MovieListResponse
    return {selectedIndex, displayValue, GenresList, MoviesList}
}

export default connect(mapStateToProps,{ LoadingPage,ChangeGenreIndex }) (MovieListScreen);