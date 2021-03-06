package com.frontoffice;
import android.os.Bundle; // here 

import com.facebook.react.ReactActivity;

// react-native-splash-screen >= 0.3.1 
import org.devio.rn.splashscreen.SplashScreen; // here 
import android.content.Intent;
import android.content.res.Configuration;
 

public class MainActivity extends ReactActivity {
   @Override
   public void onConfigurationChanged(Configuration newConfig) {
       super.onConfigurationChanged(newConfig);
       Intent intent = new Intent("onConfigurationChanged");
       intent.putExtra("newConfig", newConfig);
       this.sendBroadcast(intent);
   }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "frontOffice";
  }

     @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here 
        super.onCreate(savedInstanceState);
    }
}

