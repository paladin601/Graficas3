  
#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aCoordText;

//Uniforms MVP matrix
uniform mat4 Model;
uniform mat4 View;
uniform mat4 Projection;

out vec2 textCoord;

void main()
{
    gl_Position = Projection * View * Model * vec4(aPos, 1.0);
	textCoord = aCoordText;
}