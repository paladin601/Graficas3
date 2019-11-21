#version 330 core
in vec2 textCoord;

//Texture
uniform sampler2D textureImage;
uniform int select;

out vec4 FragColor;


void main()
{
    vec3 color=vec3(texture(textureImage,textCoord));
    if(select==2){
        color=1-color;
    }else{
        if(select==3){
            float gray_scale=0.21f*color.r+0.72*color.g+0.07*color.b;
            color=vec3(gray_scale);
        }
    }
    FragColor = vec4( color ,1.0f);
//	FragColor = texture3D(volumeText, textCoord);
}