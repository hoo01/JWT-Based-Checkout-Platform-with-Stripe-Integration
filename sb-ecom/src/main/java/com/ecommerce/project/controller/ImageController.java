package com.ecommerce.project.controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Value("${image.folder.path}")
    private String imageFolderPath;

    @GetMapping("/{imageName:.+}")
    public void getImage(@PathVariable String imageName, HttpServletResponse response) throws IOException {
        Path imagePath = Paths.get(imageFolderPath).resolve(imageName);
        Resource imageResource = new UrlResource(imagePath.toUri());

        if (imageResource.exists() && imageResource.isReadable()) {
            String contentType = Files.probeContentType(imagePath);
            response.setContentType(contentType != null ? contentType : MediaType.APPLICATION_OCTET_STREAM_VALUE);
            imageResource.getInputStream().transferTo(response.getOutputStream());
        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }
    }
}
