using Distributions
using JSON

p = 0.6
d = Geometric( p )

x = [ -0.5, -0.25, 0, 0.25, 0.5 ]

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
