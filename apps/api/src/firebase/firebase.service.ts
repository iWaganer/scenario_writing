import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import serviceAccount from '../../senarioshelf-firebase-adminsdk-fbsvc-455c3e70dd.json';

@Injectable()
export class FirebaseService {
  private app: admin.app.App;

  constructor() {
    this.app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  async verifyIdToken(idToken: string) {
    // Firebase が発行した idToken が本物かを検証して、中身(uidなど)を返す
    return this.app.auth().verifyIdToken(idToken);
  }
}