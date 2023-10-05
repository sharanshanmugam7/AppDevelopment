package com.example.sample.entryservice;

import java.util.List;

import com.example.sample.entryentity.eentity;

public interface eserviceINTF {
	public List<eentity> getlog();
	public void savelog(eentity ee);
	public void putlog(eentity ee);
	public void dellog(int pin);
}
