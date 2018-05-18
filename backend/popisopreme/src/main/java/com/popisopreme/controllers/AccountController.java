package com.popisopreme.controllers;

import com.popisopreme.models.Account;
import com.popisopreme.services.AccountService;
import com.popisopreme.services.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
public class AccountController {

    @Autowired
    private AccountService accountService;

    @RequestMapping("/accounts")
	public List<Account> getAllAccounts(){
		return accountService.getAllAccounts();
    }
    
    @RequestMapping(method= RequestMethod.POST, value="/createAccount")
    	public Account create(@RequestBody Account account) {
    		return accountService.createAccount(account);
    	}
/*
    @Transactional
    @ResponseBody
    @PostMapping("/accounts")
    public ResponseEntity create(@RequestBody @Valid AccountCreateForm newAccount, @RequestHeader("Authorization") String token) throws ServiceException {
        Account account = service.save(new Account(
                newAccount.getFullName(),
                newAccount.getEmail(),
                newAccount.getUsername(),
                newAccount.getPassword(),
                roleService.get(newAccount.getRoleId())
        ));

        logForCreate(token, account);

        return ResponseEntity.ok(account);
    }

    @Transactional
    @ResponseBody
    @PostMapping("/accounts/{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody @Valid AccountUpdateForm updatedAccount, @RequestHeader("Authorization") String token) throws ServiceException {
        Account account = service.get(id);

        account.setRole(roleService.get(updatedAccount.getRoleId()));

        account = service.save(account);

        logForUpdate(token, account);

        return ResponseEntity.ok(account);
    }

    @ResponseBody
    @GetMapping("/accounts/filter-by/email")
    public Collection<Account> filterByEmail(@RequestParam("email") String email) {
        return service.filterByEmail(email);
    }

    @Override
    @ResponseBody
    @GetMapping("/accounts/all")
    public Iterable<Account> all() {
        return super.all();
    }

    @Override
    @ResponseBody
    @GetMapping("/accounts/{id}")
    public ResponseEntity get(@PathVariable("id") Long id) throws ServiceException {
        return super.get(id);
    }

    @Override
    @ResponseBody
    @DeleteMapping("/accounts/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id, String token) throws ServiceException {
        return super.delete(id, token);
    }

    @Override
    @ResponseBody
    @GetMapping("/accounts/page/{pageNumber}")
    public ResponseEntity getPage(@PathVariable("pageNumber") int pageNumber) {
        return super.getPage(pageNumber);
    }
}
*/