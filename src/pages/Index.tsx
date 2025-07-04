
import { useState } from 'react';
import { Mail, MapPin, Calendar, Award, Star, ExternalLink, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const books = [
    {
      id: 1,
      title: "The Midnight Garden",
      description: "A haunting tale of love, loss, and redemption set in Victorian England.",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      amazonUrl: "https://amazon.com/dp/example1",
      year: "2023"
    },
    {
      id: 2,
      title: "Echoes of Tomorrow",
      description: "A science fiction thriller exploring the boundaries of time and consciousness.",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
      amazonUrl: "https://amazon.com/dp/example2",
      year: "2022"
    },
    {
      id: 3,
      title: "Letters to My Younger Self",
      description: "A collection of personal essays on growth, wisdom, and life's journey.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      amazonUrl: "https://amazon.com/dp/example3",
      year: "2021"
    }
  ];

  const events = [
    {
      title: "Book Reading & Signing",
      venue: "Barnes & Noble, Downtown",
      date: "December 15, 2024",
      time: "7:00 PM"
    },
    {
      title: "Literary Festival Panel",
      venue: "City Convention Center",
      date: "January 20, 2025",
      time: "2:00 PM"
    }
  ];

  const awards = [
    {
      title: "Best Fiction Award",
      organization: "National Book Society",
      year: "2023"
    },
    {
      title: "Emerging Author Prize",
      organization: "Writers Guild",
      year: "2022"
    }
  ];

  const reviews = [
    {
      text: "A masterful storyteller who weaves emotion and intrigue with remarkable skill.",
      author: "Literary Review Magazine",
      rating: 5
    },
    {
      text: "Each page draws you deeper into a world you never want to leave.",
      author: "Book Lovers Weekly",
      rating: 5
    },
    {
      text: "An extraordinary voice in contemporary fiction.",
      author: "The Reading Corner",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Sarah Mitchell</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#books" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Books</a>
                <a href="#events" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Events</a>
                <a href="#reviews" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Reviews</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#books" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Books</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Events</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                Welcome to the World of
                <span className="text-blue-600 block">Sarah Mitchell</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Award-winning author crafting stories that touch hearts and minds. 
                Discover tales of love, adventure, and the human spirit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="#books">Explore My Books</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c86ca6b8?w=500&h=600&fit=crop&crop=face"
                alt="Sarah Mitchell - Author"
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Sarah</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Sarah Mitchell is an award-winning author whose compelling narratives have captivated readers worldwide. 
                  With a Master's degree in Creative Writing from Columbia University, she brings both academic rigor 
                  and heartfelt passion to her storytelling.
                </p>
                <p>
                  Her works span multiple genres, from contemporary fiction to science fiction, always with a focus 
                  on the human condition and the complexities of relationships. Sarah's writing has been praised for 
                  its emotional depth, vivid imagery, and unforgettable characters.
                </p>
                <p>
                  When she's not writing, Sarah enjoys hiking in the mountains, reading poetry, and volunteering at 
                  local literacy programs. She currently resides in Portland, Oregon, with her two cats and an 
                  ever-growing collection of books.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900">Quick Facts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📚 3 Published Books</li>
                  <li>🏆 2 Literary Awards</li>
                  <li>📍 Based in Portland, OR</li>
                  <li>🎓 MFA, Columbia University</li>
                  <li>✍️ 10+ Years Writing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Published Works</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the stories that have touched thousands of readers around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{book.title}</CardTitle>
                    <span className="text-sm text-gray-500">{book.year}</span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {book.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      View on Amazon
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Awards Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Events & Awards</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                Upcoming Events
              </h3>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{event.title}</h4>
                      <div className="space-y-1 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                Awards & Recognition
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <Card key={index} className="border-l-4 border-l-yellow-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{award.title}</h4>
                      <div className="text-gray-600">
                        <span>{award.organization} • {award.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Readers Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{review.text}"
                  </blockquote>
                  <cite className="text-sm font-medium text-gray-900">
                    — {review.author}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              I'd love to hear from you! Whether you have questions about my books or just want to say hello.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input id="name" type="text" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" required className="w-full" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input id="subject" type="text" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={6} required className="w-full" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sarah Mitchell</h3>
              <p className="text-gray-400 mb-4">
                Award-winning author crafting stories that inspire and captivate.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#books" className="hover:text-white transition-colors">Books</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/sarahmitchellauthor" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.014 5.367 18.635.001 12.017.001zm4.541 7.891h-1.897c-.198 0-.336.139-.336.336v1.897h2.233l-.336 2.233h-1.897v5.946h-2.233v-5.946H10.76v-2.233h1.331V7.891h2.233c1.232 0 2.234 1.001 2.234 2.233z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/sarahmitchellauthor" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/sarahmitchellauthor" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Sarah Mitchell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
