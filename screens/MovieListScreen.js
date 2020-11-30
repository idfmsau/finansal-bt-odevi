import React from 'react';
import {StyleSheet, Image, View, Alert,Button } from 'react-native'
import * as eva from '@eva-design/eva';
import { IndexPath, Layout, Select, SelectItem, Card, Text, Avatar  } from '@ui-kitten/components';
import {GetRequest} from '../utils/apiRequester'
import {GetCategoryUrl} from '../utils/apiUrls'


class MovieListScreen extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            selectedIndex : 0,
            displayValue : '',
            MoviesList : ''
        }
    }

    setSelectedIndex = (index) => {
        this.setState({
            selectedIndex:index,
            displayValue : this.state.MoviesList[index - 1].name
        })
    }

    async componentDidMount() {
        this.setState({
            MoviesList : await GetRequest(await GetCategoryUrl())
        })
    }

    renderOption = (data) => (
        <SelectItem key={data.id} title={data.name}/>
    );

    render(){
    let selectOptions;
    if(this.state.MoviesList != ''){
        selectOptions = this.state.MoviesList.map(this.renderOption)
    }

        return (
        <>
        <Layout style={styles.container} level='1'>  
            <Select
            placeholder="Kategori Seçiniz"
            value={this.state.displayValue}
            selectedIndex={this.state.selectedIndex}
            onSelect={index => this.setSelectedIndex(index)}>
            {selectOptions}        
            </Select>
        </Layout>
        {this.state.displayValue == "Adventure" &&
        <Layout>
        <Layout>
            <Card> 
                <Text>
                    <View style={styles.cardMain}>
                        <Image
                        style={styles.tinyLogo}
                        source={require('../images/esaret.jpg')}
                        />
                        <Text>
                        <View style={styles.cardHeader}>
                            <Text category='h6' style={styles.cardHeader}>Esaretin Bedeli</Text>
                        </View>
                        <View style={styles.cardBody}>
                            <Text category='s2' style={{width:270}} >Esaretin Bedeli, Andy ve Red isimli iki mahkumun parmaklıklar ardında kurdukları dünyanın hikayesini anlatıyor. Andy Dufresne, genç ve başarılı bir bankerdir. Karısını ve karısının sevgilisini öldürmek suçundan yargılanır ve ömür boyu hapis cezası alır. </Text>
                        </View>
                        <View style={styles.cardFooter}>
                            <Text category='s2' style={{fontWeight:"800"}}>Yönetmen : Frank Darabont</Text>
                        </View>
                        </Text>
                    </View>
                </Text>
            </Card>
            </Layout>
            <Layout>
            <Card> 
                <Text>
                    <View style={styles.cardMain}>
                        <Image
                        style={styles.tinyLogo}
                        source={require('../images/godfather.jpg')}
                        />
                        <Text>
                        <View style={styles.cardHeader}>
                            <Text category='h6' style={styles.cardHeader}>The Godfather</Text>
                        </View>
                        <View style={styles.cardBody}>
                            <Text category='s2' style={{width:270}} >The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</Text>
                        </View>
                        <View style={styles.cardFooter}>
                            <Text category='s2' style={{fontWeight:"800"}}>Yönetmen : Francis Ford Coppola</Text>
                        </View>
                        </Text>
                    </View>
                </Text>
            </Card>
        </Layout>
        <Layout>
            <Card
            onPress= {async ()=>{Alert.alert("aas",await GetRequest(await GetCategoryUrl()))}}
            onLongPress={()=> {Alert.alert("ad","asdada")}}
            > 
                <Text>
                    <View style={styles.cardMain}>
                        <Image
                        style={styles.tinyLogo}
                        source={require('../images/12angrymen.jpg')}
                        />
                        <Text>
                        <View style={styles.cardHeader}>
                            <Text category='h6' style={styles.cardHeader}>12 Angry Man</Text>
                        </View>
                        <View style={styles.cardBody}>
                            <Text category='s2' style={{width:270}} >A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.</Text>
                        </View>
                        <View style={styles.cardFooter}>
                            <Text category='s2' style={{fontWeight:"800"}}>Yönetmen : Sidney Lumet</Text>
                        </View>
                        </Text>
                    </View>
                </Text>            
            </Card>
        </Layout>
        </Layout>
    }
        
    </>
        )};
    };

const styles = StyleSheet.create({
    
    container: {
        maxHeight: 320,
    },
    tinyLogo: {
        width: 100,
        height: 150,
    },
    cardHeader: {
        flexDirection:'row',
        paddingLeft: 5
    },
    cardBody: {
        flexDirection:'row',
        paddingLeft: 10
    },
    cardFooter: {
        flexDirection:'row',
        paddingLeft: 10,
        fontWeight:"800"
    },
    cardMain: {
        flexDirection:'row',
        maxHeight:150
    },
    cardInText: {
        flex:1,
        flexDirection:'row',
        width:200
    }
});

export default MovieListScreen;