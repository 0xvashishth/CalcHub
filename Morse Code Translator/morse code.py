value = input("Enter your secret code: ")
alpha_code = {".-":"A",  "-...":"B","-.-.":"C", "-..":"D",".":"E","..-.":"F", "--.":"G",
    "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L", "--":"M", "-.":"N", "---":"O",".--.":"P",
    "--.-":"Q", ".-.":"R", "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X", "-.--":"Y",
    "--..":"Z"}
code = value.split()
print("The code gets translated to: ")
for element in range(0, len(code)):
    print(alpha_code.get(code[element]), end="")
