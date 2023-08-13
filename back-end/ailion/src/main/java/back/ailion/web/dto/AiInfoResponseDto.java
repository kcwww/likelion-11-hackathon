package back.ailion.web.dto;

import back.ailion.model.entity.AiInfo;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AiInfoResponseDto {
    //private Long id;
    private String name;
    private String content;
    private String url;
    private String category;
    //private LocalDateTime createdAt;

    public AiInfoResponseDto(AiInfo aiInfo) {
        //this.id = aiInfo.getId();
        this.name = aiInfo.getName();
        this.content = aiInfo.getContent();
        this.url = aiInfo.getUrl();
        this.category = aiInfo.getCategory();
    }

}
