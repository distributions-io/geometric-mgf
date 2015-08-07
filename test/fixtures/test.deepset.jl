using Distributions
using JSON

p = 0.2
d = Geometric( p )

x = linspace( -20, 0.2, 400 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/deepset.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
