using Distributions
using JSON

p = 0.5
d = Geometric( p )

x = linspace( -0.5, 0.5, 25 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/matrix.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
