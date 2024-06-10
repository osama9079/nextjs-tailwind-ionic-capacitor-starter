import {
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonToggle,
    IonInput,
    IonText,
    IonButton,
  } from '@ionic/react';

const Login = () => {
    
    return (
        <IonPage>
        {/* <IonHeader class='display:none'>
          <IonToolbar>
            <IonTitle>logIn Page</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonContent>
          <Ui/>
        </IonContent>
      </IonPage>
    );
  };
  const Ui =()=>{
    return(
        <IonList>
      <IonItem>
        <IonInput labelPlacement="floating" value="">
          <div slot="label">
            Email <IonText color="danger"></IonText>
          </div>
        </IonInput>
      </IonItem>
      <IonItem>
        <IonInput labelPlacement="floating" value="" type='password'>
          <div slot="label">
            كلمة المرور <IonText color="danger"></IonText>
          </div>
        </IonInput>
      </IonItem>
      <IonButton shape="round">تسجيل الدخول</IonButton>
    </IonList>
    )
  }
  
  export default Login;