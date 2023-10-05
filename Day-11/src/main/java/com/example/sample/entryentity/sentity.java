package com.example.sample.entryentity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signup")
public class sentity {

	public sentity() { super(); }
	public sentity(int pin, String username, String dob, long mobile, String email, String password,
			String confirmpassord, String country) {
		super();
		this.pin = pin;
		this.username = username;
		this.dob = dob;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
		this.confirmpassord = confirmpassord;
		this.country = country;
	}
	@Override
	public String toString() {
		return "sentity [pin=" + pin + ", username=" + username + ", dob=" + dob + ", mobile=" + mobile + ", email="
				+ email + ", password=" + password + ", confirmpassord=" + confirmpassord + ", country=" + country
				+ "]";
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
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmpassord() {
		return confirmpassord;
	}
	public void setConfirmpassord(String confirmpassord) {
		this.confirmpassord = confirmpassord;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pin")
	private int pin;
	@Column(name="username")
	private String username;
	@Column(name="date of birth")
	private String dob;
	@Column(name="contact")
	private long mobile;
	@Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
	@Column(name="confirm")
	private String confirmpassord;
	@Column(name="country")
	private String country;
	

}
