package com.ecommerce.project.payload;
import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {
    @JsonProperty("productId")  // ✅ 必须加这个
    private Long productId;
    private String productName;
    private String description;
    private BigDecimal price;
    private BigDecimal specialPrice;
    private Integer quantity;
    private String image;
    private List<ProductDTO> content;
    private Integer pageNumber;
    private Integer pageSize;
    private Long totalElements;
    private Integer totalPages;
    private boolean lastPage;
}
