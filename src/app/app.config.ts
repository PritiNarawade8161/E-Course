import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ), provideFirebaseApp(() => initializeApp({"projectId":"e-course-6f6cf","appId":"1:476446705989:web:730465cb456f0b0485962c","storageBucket":"e-course-6f6cf.firebasestorage.app","apiKey":"AIzaSyAjhIfYPMFhMc7R1IFPG5cY6Vfb9aYuMcw","authDomain":"e-course-6f6cf.firebaseapp.com","messagingSenderId":"476446705989","measurementId":"G-D04D9FRBZM"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"ecourseplatform","appId":"1:26297384953:web:28ca709762b07b29e78728","storageBucket":"ecourseplatform.firebasestorage.app","apiKey":"AIzaSyAFA8CGdIa5NlEWQUorQx3KlRiYHvYQJmo","authDomain":"ecourseplatform.firebaseapp.com","messagingSenderId":"26297384953"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideAppCheck(() => {
  // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
  const provider = new ReCaptchaEnterpriseProvider("/* reCAPTCHA Enterprise site key */");
  return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
}), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), providePerformance(() => getPerformance()), provideStorage(() => getStorage()), provideRemoteConfig(() => getRemoteConfig()), provideVertexAI(() => getVertexAI()), provideFirebaseApp(() => initializeApp({"projectId":"e-course-platform","appId":"1:417490651138:web:02317c2c824fc11024bf1b","storageBucket":"e-course-platform.firebasestorage.app","apiKey":"AIzaSyA9J4NZmb1R6zlFVEA0SPcGYE_0DNqLbdQ","authDomain":"e-course-platform.firebaseapp.com","messagingSenderId":"417490651138"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideAppCheck(() => {
  // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
  const provider = new ReCaptchaEnterpriseProvider("/* reCAPTCHA Enterprise site key */");
  return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
}), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), providePerformance(() => getPerformance()), provideStorage(() => getStorage()), provideRemoteConfig(() => getRemoteConfig()),
  ],
};
