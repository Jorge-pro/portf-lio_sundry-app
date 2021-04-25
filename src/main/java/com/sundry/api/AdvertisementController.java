package com.sundry.api;


import com.sundry.model.Advertisement;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AdvertisementController {

    @GetMapping("/advertisement")
    public List<Advertisement> findAll() {

        List<Advertisement> advertisements = new ArrayList<>();

        Advertisement advertisement = new Advertisement();
        advertisement.setId("001");
        advertisement.setContact("Jorge");


        Advertisement advertisement1 = new Advertisement();
        advertisement1.setId("002");
        advertisement1.setContact("Manu");


        advertisements.add(advertisement);
        advertisements.add(advertisement1);

        return advertisements;
    }
}
