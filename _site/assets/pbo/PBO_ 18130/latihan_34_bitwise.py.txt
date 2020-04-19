a=int(input("masukan nilai A="))
b=int(input("masukan nilai B=" ))

c= a & b
print("{} & {}={}". format(a,b,c))

c= a | b
print("{} | {}={}". format(a,b,c))

c= a ^ b
print("{} | {}={}". format(a,b,c))

c= ~a
print("~{}= {}". format(a,b,c))

c= a << b
print("{} << {}={}". format(a,b,c))

c=a >> b
print("{} >> {}={}". format(a,b,c))
