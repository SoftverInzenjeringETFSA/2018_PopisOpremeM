package com.popisopreme.services;

import com.popisopreme.models.Account;
import com.popisopreme.services.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class AccountService {


    public Account save(Account model) throws ServiceException {
        Account sameEmail = getByEmail(model.getEmail());
        Account sameUsername = getByUsername(model.getUsername());

        if (sameEmail != null && model.getId() != sameEmail.getId()) {
            throw new ServiceException("Korisnik s navedenom e-mail adresom već postoji.");
        } else if (sameUsername != null && model.getId() != sameUsername.getId()) {
            throw new ServiceException("Korisnik s navedenim korisničkim imenom već postoji.");
        }

        return super.save(model);
    }
    private List<Account> Accounts=new ArrayList<>(Arrays.asList(
		new Account("Tarik Softic","tarik.softic@nesto.com","tsoftic","sifra123",1,new Role())
            )); 
            
    public List<Accounts> getAllAccounts(){
		return Accounts;
    }
    
    public Item createAccount(Account account) {
        Account acc = new Account(account);
        Accounts.add(acc);
        return acc;
    }

    public Account getByEmail(String email) {
        return repository.findFirstByEmail(email);
    }

    public Collection<Account> filterByEmail(String email) {
        return repository.filterByEmail(email);
    }

    public Account getByUsername(String username) {
        return repository.findByUsername(username);
    }
}