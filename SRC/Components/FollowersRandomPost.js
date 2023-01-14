import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Post_Big_Card from '../Cards/Post_Big_Card'

const FollowersRandomPost = () => {

    let data = [
        {
            id: 1,
            username: '@EmilyIsOnUmm',
            profile_image: 'https://images.pexels.com/photos/3774925/pexels-photo-3774925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            image: "https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            likes: [
                "@Madison",
                "@Abigail"
            ],
            comments: [
                {
                    id: 1,
                    username: '@Madison',
                    comment: 'nice post'
                },
                {
                    id: 2,
                    username: '@Abigail',
                    comment: 'Your look awesome'
                }
            ]
        },
        {
            id: 2,
            username: '@Marlene_Leppänen',
            profile_image: 'https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

            likes: [
                "@Marlene_Leppänen"
            ],
            comments: [
                {
                    id: 1,
                    username: '@Abigail',
                    comment: 'nice post'
                },
                {
                    id: 2,
                    username: '@Madison',
                    comment: 'Your look awesome'
                }
            ]
        },
        {
            id: 3,
            username: '@Benjamin',
            profile_image: 'https://images.pexels.com/photos/12712962/pexels-photo-12712962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            image: "https://images.pexels.com/photos/12712966/pexels-photo-12712966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            likes: [
                "@AshuIsOnUmm",
                "@Abigail"
            ],
            comments: [
                {
                    id: 1,
                    username: '@Abigail',
                    comment: 'nice post'
                },
                {
                    id: 2,
                    username: '@ayush',
                    comment: 'Your look awesome'
                }
            ]
        },
        {
            id: 4,
            username: '@Andrew',
            profile_image: 'https://images.pexels.com/photos/7265998/pexels-photo-7265998.jpeg?auto=compress&cs=tinysrgb&w=800',
            image: "https://images.pexels.com/photos/8103387/pexels-photo-8103387.jpeg?auto=compress&cs=tinysrgb&w=800",

            likes: [
                "@Abigail"
            ],
            comments: [
                {
                    id: 1,
                    username: '@yunusISonUmm',
                    comment: 'nice post'
                },
                {
                    id: 2,
                    username: '@Abigail',
                    comment: 'Your look awesome'
                }
            ]
        }
    ]

    // console.log(data[0].username)
    return (
        <ScrollView style={styles.container}>
            {
                data.map((item) => {
                    return (
                        <Post_Big_Card
                            key={item.id}
                            username={item.username}
                            profile_image={item.profile_image}
                            post_pic={item.image}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default FollowersRandomPost

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    }
})