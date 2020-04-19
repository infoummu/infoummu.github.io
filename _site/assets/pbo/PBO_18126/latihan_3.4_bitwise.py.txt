#nurhumaira operator bitwise.py
a = int (input("masukan nilai A= "))
b = int (input("masukan nilai B=  "))
#nurhumaira operasi and
c=a & b
print("{} & {}={}". format(a,b,c))
#operasi or
c=a | b
print("{} | {}={}". format(a,b,c))
#operasi XOR
c=a ^ b 
print("{} | {}={}". format(a,b,c))
#operasi n/k
c= ~a
print("~{}= {}". format(a,b,c))
#operasi left shift
print("{} << {}={}". format(a,b,c))
#operasi right shift
c= a >> b
print("{} >> {}={}". format(a,b,c))