package xyz.gtomy.swiwebchat;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/hovno")
    public String getHovno() {
        return "Jsi fakt hovno";
    }
}