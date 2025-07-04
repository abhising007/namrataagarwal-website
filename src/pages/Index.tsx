
import { useState } from 'react';
import { Mail, MapPin, Calendar, Award, Star, ExternalLink, Menu, X, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      title: "The grasshopper and the owl",
      description: "This story takes us to the natural habitat of the Grasshopper whose courage and intelligence help him outsmart the Owl and escape to safety.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      amazonUrl: "#",
      year: "2023"
    },
    {
      id: 2,
      title: "Misha learns about Money: Learn to spend and save Money",
      description: "This delightful little book is a must-have for all parents who wish to begin teaching their children the value and limitations of money and the importance of saving and spending wisely.",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
      amazonUrl: "#",
      year: "2022"
    }
  ];

  const activities = [
    {
      title: "Business Visionaire Magazine Feature",
      description: "Featured article about innovative approaches in children's education",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop"
    },
    {
      title: "Beyond Classrooms Article",
      description: "Practice is the Key to Success - Educational content for young learners",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "FACES Magazine Feature",
      description: "Life in Lagos, Nigeria - Cultural exploration for children",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Interactive Children's Content",
      description: "Engaging maze and puzzle activities for young readers",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    }
  ];

  const awards = [
    {
      title: "Purple DragonFly Award",
      organization: "Purple DragonFly Book Awards",
      year: "2023",
      description: "Misha learns about Money received this prestigious award"
    }
  ];

  const visits = [
    {
      title: "OLC School Visit",
      location: "New Jersey",
      description: "Interactive reading session with students"
    },
    {
      title: "Elementary School Visits",
      location: "New Jersey",
      description: "Multiple school visits promoting literacy and financial education"
    }
  ];

  const reviews = [
    {
      text: "At a mixed ages, culturally diverse library story time, a preschooler was drawn to the large, bright pictures on the cover of this book in a library display, and insisted we read this one. The group of ages 3 to 8 sat silently, intensely focused on the story, with mouths open. They interacted with each page of the story, trying to predict what would happen next, and all personally identified with the children in the story, and the parents' perspective on the action. The story induced suspense and laughter. Afterwards, the children clamored to borrow the book to read again at home. What a reaction to this unplanned and child initiated addition to our story time!",
      author: "Sea Spicer",
      rating: 5,
      bookTitle: "Misha and the Gigantic Birthday Cake (Misha Books)"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-slate-800 shadow-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">Namrata Agarwal</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#books" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">Books</a>
                <a href="#activities" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">Activities</a>
                <a href="#awards" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">Awards</a>
                <a href="#reviews" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">Reviews</a>
                <a href="#contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-cyan-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
              <a href="#home" className="text-white hover:text-cyan-400 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">About</a>
              <a href="#books" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">Books</a>
              <a href="#activities" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">Activities</a>
              <a href="#awards" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">Awards</a>
              <a href="#reviews" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">Reviews</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-slate-800 to-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Welcome to the World of
                <span className="text-cyan-400 block">Namrata Agarwal</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Children's book writer crafting engaging stories for young minds. 
                Discover tales that educate, entertain, and inspire curiosity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <a href="#books">Explore My Books</a>
                </Button>
                <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c86ca6b8?w=500&h=600&fit=crop&crop=face"
                alt="Namrata Agarwal - Children's Book Author"
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">About</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="prose prose-lg text-gray-300 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Namrata Agarwal</h3>
                <p>
                  Namrata Agarwal is a children's book writer. She has written picture books - MISHA series and 
                  the GRASSHOPER and THE OWL. She has also written for children's magazines. Her debut book was 
                  awarded the Purple DragonFly award.
                </p>
                <p>
                  She is a member of SCBWI and CBI. Currently she lives in NJ with her two kids and husband. 
                  In her spare time, she enjoys reading and crafting.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-white">Follow me on social:</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Instagram className="h-8 w-8" />
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Linkedin className="h-8 w-8" />
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Twitter className="h-8 w-8" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700 p-6 rounded-lg">
                <h3 className="font-semibold mb-4 text-white">Quick Facts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>📚 MISHA Series Author</li>
                  <li>🏆 Purple DragonFly Award Winner</li>
                  <li>📍 Based in New Jersey</li>
                  <li>👥 SCBWI & CBI Member</li>
                  <li>✍️ Children's Magazine Contributor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Books</h2>bounds-checks
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover engaging stories that educate and entertain young readers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {books.map((book) => (
              <Card key={book.id} className="bg-slate-800 border-slate-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{book.title}</h3>
                    <div className="w-16 h-1 bg-cyan-400 mb-4"></div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {book.description}
                    </p>
                    <Button className="bg-slate-700 hover:bg-slate-600 text-white border border-slate-600">
                      Order Now
                    </Button>
                  </div>
                  <div className="aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Magazines Section */}
      <section id="activities" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Activities & Magazines</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{activity.title}</h3>
                  <p className="text-gray-300">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Visits Section */}
      <section id="awards" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Award & Visits</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Awards */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Award className="h-6 w-6 text-cyan-400" />
                Awards & Recognition
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 border-l-4 border-l-yellow-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-white mb-2">{award.title}</h4>
                      <div className="text-gray-300 mb-2">
                        <span>{award.organization} • {award.year}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{award.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* School Visits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-cyan-400" />
                School Visits
              </h3>
              <div className="space-y-6">
                {visits.map((visit, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 border-l-4 border-l-cyan-400">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-white mb-2">{visit.title}</h4>
                      <div className="text-gray-300 mb-2">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {visit.location}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{visit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Reviews</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-slate-700 border-slate-600">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                        "{review.text}"
                      </blockquote>
                      <div className="space-y-2">
                        <cite className="text-lg font-semibold text-cyan-400">
                          {review.bookTitle}
                        </cite>
                        <p className="text-sm text-gray-400">
                          — {review.author}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600" />
            <CarouselNext className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              I'd love to hear from you! Whether you have questions about my books or want to arrange a school visit.
            </p>
          </div>

          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input id="name" type="text" required className="w-full bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" required className="w-full bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input id="subject" type="text" required className="w-full bg-slate-700 border-slate-600 text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={6} required className="w-full bg-slate-700 border-slate-600 text-white" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Namrata Agarwal</h3>
              <p className="text-gray-400 mb-4">
                Children's book writer crafting engaging stories for young minds.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#books" className="hover:text-white transition-colors">Books</a></li>
                <li><a href="#activities" className="hover:text-white transition-colors">Activities</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Namrata Agarwal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
