import { Client, Account, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '67991ff7003a41436316',
    databaseId: '67992154002238d1f75e',
    userCollectionId: '6799217d0007e600758d',
    videoCollectionId: '679921a6000d9bb3f1f8',
    storageId: '679922b00021a917d9d6'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

const account = new Account(client);

export const createUser = () => {
    try {
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

;