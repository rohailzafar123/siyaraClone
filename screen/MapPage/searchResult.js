import React, { Component } from 'react';
import { 
    Text
 } from 'react-native';
import { View , List ,ListItem} from 'native-base'

export const SearchResult = () => {
    return(
        <View>
            <List>
                <ListItem>
                    <Text> List item 1</Text>
                </ListItem>
                <ListItem>
                    <Text> List item 2</Text>
                </ListItem>
            </List>
        </View>
    );
};
export default SearchResult;
