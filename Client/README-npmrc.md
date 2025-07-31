# Om legacy-peer-deps i .npmrc

Vi använder `legacy-peer-deps=true` i `.npmrc` för att ignorera peer dependency-konflikter
som annars kan stoppa installationen när olika paket kräver olika versioner av t.ex. eslint.
