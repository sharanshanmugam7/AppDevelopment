package com.example.sample.entryservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.entryentity.eentity;
import com.example.sample.entryrepo.erepo;

@Service
public class eservice implements eserviceINTF {
	@Autowired
	erepo er;
	@Override
	public List<eentity> getlog() 
	{
		return er.findAll();
	}
	@Override
	public void savelog(eentity ee) 
	{
		er.save(ee);
	}
	@Override
	public void putlog(eentity ee) 
	{
		er.save(ee);
	}
	@Override
	public void dellog(int pin) 
	{
		er.deleteById(pin);
	}
}
