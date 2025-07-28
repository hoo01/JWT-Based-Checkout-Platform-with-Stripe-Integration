package com.ecommerce.project.payload;
import lombok.Data;

import java.math.BigDecimal;
@Data
public class ProjectRequest {
    private String name;
    private String description;
    private BigDecimal price;
    private Integer stockQuantity;
    private String category;
    private String imageUrl;
}
