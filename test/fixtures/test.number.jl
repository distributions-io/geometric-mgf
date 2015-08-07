using Distributions
using JSON

p = 0.5
d = Geometric( p )

x = [ -5, -2.5, 0, 2.5, 5 ]

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/number.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
