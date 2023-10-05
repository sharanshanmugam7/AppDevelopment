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

import com.example.sample.entryentity.sentity;
import com.example.sample.entryservice.sservice;
@RestController
public class scontroller {
	@Autowired
	sservice ss;
	@GetMapping("/signup/read")
	public List<sentity> getsignupdata()
	{
		return ss.getsignup();
	}
	@PostMapping("/signup/create")
	public void savesignupdata(@RequestBody sentity ee)
	{
		ss.savesignup(ee);
	}
	@PutMapping("/signup/update")
	public void putsignupdata(@RequestBody sentity ee,@RequestParam int pin)
	{
		ss.putsignup(ee);
	}
	@DeleteMapping("/signup/delete")
	public void deletesignupdata(@RequestParam int pin)
	{
		ss.delsignup(pin);
	}
}
