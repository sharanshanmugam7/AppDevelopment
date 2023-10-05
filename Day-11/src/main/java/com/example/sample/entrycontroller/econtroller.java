package com.example.sample.entrycontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sample.entryentity.eentity;
import com.example.sample.entryservice.eservice;

@RestController
public class econtroller {
	@Autowired
	eservice es;
	@GetMapping("/login/read")
	public List<eentity> getlogdata()
	{
		return es.getlog();
	}
	@PostMapping("/login/create")
	public void savelogdata(@RequestBody eentity ee)
	{
		es.savelog(ee);
	}
	@PutMapping("/login/update")
	public void putlogdata(@RequestBody eentity ee,@RequestParam int pin)
	{
		es.putlog(ee);
	}
	@DeleteMapping("/login/delete")
	public void deletelogdata(@RequestParam int pin)
	{
		es.dellog(pin);
	}
}
