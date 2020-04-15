a=int(input("Masukan Nilai A = "))
b=int(input("Masukan Nilai B = "))

c= a & b 
print("{} & {} = {}". format(a,b,c))

c= a | b 
print("{} | {} = {}". format(a,b,c))

c= a ^ b 
print("{} ^ {} = {}". format(a,b,c))

c= ~a  
print("~{} = {}". format(a,b,c))

c= a << b 
print("{} << {} = {}". format(a,b,c))

c= a >> b 
print("{} >> {} = {}". format(a,b,c))
