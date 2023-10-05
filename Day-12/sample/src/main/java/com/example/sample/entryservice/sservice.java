package com.example.sample.entryservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.entryentity.sentity;
import com.example.sample.entryrepo.srepo;

@Service
public class sservice implements sserviceINTF {
	@Autowired
	srepo sr;
	@Override
	public List<sentity> getsignup() 
	{	
		return sr.findAll();
	}
	@Override
	public void savesignup(sentity ee) 
	{
		sr.save(ee);
	}
	@Override
	public void putsignup(sentity ee)
	{
		sr.save(ee);
	}
	@Override
	public void delsignup(int pin) 
	{
		sr.deleteById(pin);
		
	}

}
