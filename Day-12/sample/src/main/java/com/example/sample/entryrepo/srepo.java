package com.example.sample.entryrepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sample.entryentity.sentity;
@Repository
public interface srepo extends JpaRepository<sentity,Integer>  {

}
