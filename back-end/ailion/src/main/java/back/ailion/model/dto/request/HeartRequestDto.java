package back.ailion.model.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Positive;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HeartRequestDto {

    @Positive(message = "null")
    private Long userId;

    @Positive(message = "null")
    private Long postId;
}