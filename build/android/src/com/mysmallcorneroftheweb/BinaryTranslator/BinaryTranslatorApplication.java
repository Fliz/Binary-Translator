package com.mysmallcorneroftheweb.BinaryTranslator;

import org.appcelerator.titanium.TiApplication;

public class BinaryTranslatorApplication extends TiApplication {

	@Override
	public void onCreate() {
		super.onCreate();
		
		appInfo = new BinaryTranslatorAppInfo(this);
	}
}
