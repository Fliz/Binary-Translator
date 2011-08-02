package com.mysmallcorneroftheweb.BinaryTranslator;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public class BinaryTranslatorAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public BinaryTranslatorAppInfo(TiApplication app) {
		TiProperties properties = app.getAppProperties();
					
		properties.setString("ti.deploytype", "test");
	}
	
	public String getId() {
		return "com.mysmallcorneroftheweb.BinaryTranslator";
	}
	
	public String getName() {
		return "Binary Translator";
	}
	
	public String getVersion() {
		return "0.3";
	}
	
	public String getPublisher() {
		return "jonny";
	}
	
	public String getUrl() {
		return "http://www.mysmallcornerstudios.com/binary-translator";
	}
	
	public String getCopyright() {
		return "2011 by Jonny Olliff-Lee";
	}
	
	public String getDescription() {
		return "Application for translating text into binary or hex and the reverse.";
	}
	
	public String getIcon() {
		return "default_app_logo.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "95e43a91-3eff-4bae-8a7e-12a1e93c6189";
	}
}
