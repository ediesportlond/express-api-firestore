import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getApps } from "firebase-admin/app";

import secrets from '../secrets.js';

export default function dbConnect() {
    //returns all connections. If length of connections array is zero then connect.
    if (!getApps().length) {

        initializeApp({
            credential: cert(secrets)
        })
    }
    return getFirestore();
}