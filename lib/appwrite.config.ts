import * as sdk from "node-appwrite";

export const PROJECT_ID = "66a241e7001c71038dfa";
export const API_KEY= "7a5ba5654e72bdd2ceb8ef95a0ce1eba7d2131be60a216767654461f0beaa5cf860e38f8cf3457ce117660eefad7f675fa56a5a791af9570b8f3138709e5a406d15bf816e56024185b08aa23a6efd1fb333cc3135806267737507bd2242adfa202269219acef74b7ad66527702371a6393befee5309967f5d8195e848082b5d9"
export const DATABASE_ID = "66a2428b000f5ded82dc"
export const PATIENT_COLLECTION_ID = "66a242c8001253922759"
export const DOCTOR_COLLECTION_ID = "66a242f900156041d151"
export const APPOINTMENT_COLLECTION_ID = "66a2431f001adfef0b5d"
export const NEXT_PUBLIC_BUCKET_ID = "66a2e15f00323cbe13a6" 
export const NEXT_PUBLIC_ENDPOINT = "https://cloud.appwrite.io/v1" 

// export const {
  // NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  // PROJECT_ID,
  // API_KEY,
  // DATABASE_ID,
  // PATIENT_COLLECTION_ID,
  // DOCTOR_COLLECTION_ID,
  // APPOINTMENT_COLLECTION_ID,
  // NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
// } = process.env;
// 
const client = new sdk.Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66a241e7001c71038dfa").setKey("7a5ba5654e72bdd2ceb8ef95a0ce1eba7d2131be60a216767654461f0beaa5cf860e38f8cf3457ce117660eefad7f675fa56a5a791af9570b8f3138709e5a406d15bf816e56024185b08aa23a6efd1fb333cc3135806267737507bd2242adfa202269219acef74b7ad66527702371a6393befee5309967f5d8195e848082b5d9");

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);