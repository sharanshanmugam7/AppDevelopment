package com.example.sample.entryentity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class eentity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pin")
	private  int pin;
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	public eentity() { super(); }
	public eentity(int pin, String username, String password) {
		super();
		this.pin = pin;
		this.username = username;
		this.password = password;
	}
	@Override
	public String toString() {
		return "eentity [pin=" + pin + ", username=" + username + ", password=" + password + "]";
	}
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
