import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

const commentList = comments => {
  const { values } = comments; // comments.values[0].name
  if (values.length !== 0) {
    return (
      <View style={styles.commentsContainer}>
        <Text style={styles.commentText}>Comments ({`${values.length}`})</Text>
        <FlatList
          data={values}
          keyExtractor={item => item.id}
          renderItem={item => (
            <View>
              <Text>{item.item.name}</Text>
              <Text>{item.item.comment}</Text>
            </View>
          )}
        />
      </View>
    );
  }
  return (
    <View style={styles.commentsContainer}>
      <Text style={styles.commentText}>Comments ({values.length})</Text>
      <Text>name</Text>
    </View>
  );
};

export default commentList;
