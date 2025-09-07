<!-- Firebase SDKs (Compat) -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>

<script>
  // إعدادات Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDKuEGoUAcbKCPRNQtYvKfz4WPTGQUHR0w",
    authDomain: "idid-store.firebaseapp.com",
    projectId: "idid-store",
    storageBucket: "idid-store.appspot.com",
    messagingSenderId: "1024069736444",
    appId: "1:1024069736444:web:1eba37134473a9474b4479"
  };

  // تهيئة Firebase
  firebase.initializeApp(firebaseConfig);

  // اختصارات للوظائف
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
</script>
