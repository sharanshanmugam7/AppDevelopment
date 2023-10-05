package com.example.sample.entryservice;

import java.util.List;

import com.example.sample.entryentity.sentity;

public interface sserviceINTF {
	public List<sentity> getsignup();
	public void savesignup(sentity ee);
	public void putsignup(sentity ee);
	public void delsignup(int pin);

}
