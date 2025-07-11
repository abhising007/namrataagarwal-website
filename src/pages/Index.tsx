import { useState } from 'react';
import { Mail, MapPin, Calendar, Award, Star, ExternalLink, Menu, X, Instagram, Linkedin, Twitter, BookOpen } from 'lucide-react';
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
import emailjs from 'emailjs-com';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // EmailJS configuration
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_name: 'Namrata Agarwal'
    };

    // Send email using EmailJS
    emailjs.send(
      'EMAILJS_SERVICE_ID', // Replace with your EmailJS service ID
      'EMAILJS_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'EMAILJS_PUBLIC_KEY' // Replace with your EmailJS user ID
    )
    .then((response) => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      // Reset form
      (e.target as HTMLFormElement).reset();
    })
    .catch((error) => {
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    });
  };

  const books = [
    {
      id: 1,
      title: "The grasshopper and the owl",
      description: "This story takes us to the natural habitat of the Grasshopper whose courage and intelligence help him outsmart the Owl and escape to safety.",
      image: "books/Grasshopper_Owly_SX500.jpg",
      amazonUrl: "https://www.amazon.com/gp/product/B08KY9S13W/ref=dbs_a_def_rwt_bibl_vppi_i0",
      year: "2023"
    },
    {
      id: 2,
      title: "Misha learns about Money: Learn to spend and save Money",
      description: "This delightful little book is a must-have for all parents who wish to begin teaching their children the value and limitations of money and the importance of saving and spending. Follow the story of Misha, a little girl who thinks she should be able to have all the toys she wants, especially all the same toys her friends have. Misha's mother cannot keep up with her daughter's demands, and, in desperation, finally tries giving Misha an allowance. See what happens when this little girl begins to grow up as she learns about saving and spending.",
      image: "books/Misha_learns_money_SX500.jpg?w=400&h=600&fit=crop",
      amazonUrl: "https://www.amazon.com/gp/product/0692374299/ref=dbs_a_def_rwt_bibl_vppi_i4",
      year: "2022"
    },
    {
      id: 3,
      title: "Misha and her farm adventure",
      description: "Misha is a very curious little girl. One evening at dinner she asks her dad where food comes from. Misha is very interested in food, and so is her little dog Fluffy, who likes being fed from the table (don't let dad catch on!) Follow Misha and Fluffy as they both learn about seeds and how plants grow, about sun and rain, and even about scarecrows (scary!) and worms (yuck!). This delightful little book is a wonderful introduction to farming for any little boy or girl who has ever asked, \"Where does our food come from?\" Misha and Fluffy know!",
      image: "books/Misha_Farm_SX500.jpg?w=400&h=600&fit=crop",
      amazonUrl: "https://www.amazon.com/gp/product/B014VR37N4/ref=dbs_a_def_rwt_bibl_vppi_i2boo",
      year: "2022"
    },
    {
      id: 4,
      title: "Misha and the Gigantic Birthday Cake",
      description: "Misha is at it again. This time it's her birthday and she's asked her mother for a gigantic birthday cake, one as tall as a Christmas tree. Follow Misha and her friends as they try to figure out how to blow out the candles and cut such a huge cake—and the chaos that follows. It's a birthday to remember and sometimes dreams can come through—or do they?Misha is at it again. This time it's her birthday and she's asked her mother for a gigantic birthday cake, one as tall as a Christmas tree. Follow Misha and her friends as they try to figure out how to blow out the candles and cut such a huge cake—and the chaos that follows. It's a birthday to remember and sometimes dreams can come through—or do they?",
      image: "books/Misha_Gigantic_Cake_SX500.jpg?w=400&h=600&fit=crop",
      amazonUrl: "https://www.amazon.com/gp/product/B075D9BQ6N/ref=dbs_a_def_rwt_bibl_vppi_i1",
      year: "2022"
    }

  ];

  const activities = [
    {
      title: "FACES Magazine Feature",
      description: "Life in Lagos, Nigeria - Cultural exploration for children",
      image: "awards/purple-dragon-1.png"
    },
    {
      title: "FACES Magazine Feature",
      description: "Life in Lagos, Nigeria - Cultural exploration for children",
      image: "magazines/faces-lagos-nigeria.png"
    },
    {
      title: "Intelli Jelly Feature",
      description: "Featured article about innovative approaches in children's education",
      image: "magazines/nita-ambani-mango.png"
    },
    {
      title: "Intelli Jelly Feature",
      description: "Featured article about innovative approaches in children's education",
      image: "magazines/nita-ambani.png"
    },
    
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
    },
    {
      text: "My son loves this book. He loves moving his head side to side with the owl and marching like the grasshopper. We read it every night now at bedtime!",
      author: "Patrick M Perrotto",
      rating: 5,
      bookTitle: "The Grasshopper and the Owl"
    },
    {
      text: "We were fortunate enough to have the author read this book at our Library. The pages are bright and compelling for a story time group, and the children identified with the story. This was a learning opportunity for both the children and for the parents' discussion. The story implements some basics of arithmetic facts with the real world application, making the lesson meaningful and memorable. The author is clearly an emotionally intelligent, creative parent, teacher and writer. We look forward to reading more from this author!",
      author: "Sea Spicer",
      rating: 5,
      bookTitle: "Misha learns about Money: Learn to spend and save Money"
    },
    {
      text: "I needed a book to give to my child when she was opening a bank account. This is a great little story to explain the value of money.",
      author: "John Mathews",
      rating: 5,
      bookTitle: "Misha learns about Money: Learn to spend and save Money"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">Namrata Agarwal</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#books" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Books</a>
                <a href="#awards" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Awards</a>
                {/* <a href="#awards" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Awards</a> */}
                <a href="#reviews" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Reviews</a>
                {/* <a href="#contact" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a> */}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-orange-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-orange-200">
              <a href="#home" className="text-gray-800 hover:text-orange-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#books" className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium">Books</a>
              <a href="#awards" className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium">Awards</a>
              <a href="#reviews" className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-orange-50 to-amber-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
                Welcome to the World of
                <span className="text-orange-600 block">Namrata Agarwal</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Children's book writer crafting engaging stories for young minds. 
                Discover tales that educate, entertain, and inspire curiosity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <a href="#books">Explore My Books</a>
                </Button>
                {/* <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                  <a href="#contact">Get In Touch</a>
                </Button> */}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="about/Namrata.jpg?w=500&h=600&fit=crop&crop=face"
                alt="Namrata Agarwal - Children's Book Author"
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Book Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              Coming in September 2025
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Latest Book Release
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="books/Mithai_Box_Is_Not_Empty_SX500.jpg"
                  alt="The Mithai Box Is Not Emptyn - New Book"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                The Mithai Box Is Not Empty
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This delicious sweet picture book celebrates the joys (and rewards) of sharing. . . and delectable Indian desserts!

Ria wants to be the best chai party host to impress her grandparents, who are visiting all the way from India. She even shares her precious mithai box of her favorite sweet, motichoor ladoo, with the whole family. After all, her grandparents always taught her "Atithi devo bhava, like God we welcome our guests with warmth and respect."

Everyone loves the motichoor ladoo. And Ria is happy that everyone else is happy. But as the ladoo disappears, she worries that there will be none left for her. What good is being the best host if Ria doesn't get to have fun too?

But her grandmother has a surprise. . .one last motichoor ladoo!

Sharing has never been so sweet! The Mithai Box Is Not Empty celebrates the joys of generosity, but reminds us not to forget our own happiness. An author's note on mithais and a matching mithai game are included in the back of the book.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="https://www.amazon.com/Mithai-Box-Not-Empty/dp/0823454975" target="_blank">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Pre-order on Amazon
                  </Button>
                </a>
              </div>
              
              <div className="bg-white/80 p-6 rounded-lg border border-green-200 shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-3">What to Expect:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Colorful exploration of culture, traditions, food, and celebrations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Heartwarming lessons on sharing and community
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Gentle guidance on navigating everyday dilemmas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Fun, interactive activities to engage young minds
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    A joyful journey that builds empathy and connection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">About</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="prose prose-lg text-gray-700 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Namrata Agarwal</h3>
                <p>
                  I am a children’s book writer. I have written picture books - Misha series and The Grasshopper and the Owl. I have also written for children’s magazines like Cricket media (Faces) and IntellyJelly.
                </p>
                <p>
                  I am a member of SCBWI, rateyourstory,org and Writing Barn. Currently I live in New Jersey with her two kids and husband. In my spare time, I enjoy reading and crafting.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Follow me on social:</h4>
                <div className="flex space-x-4">
                  <a href="https://x.com/namrataagarwal"  target="_blank" className="text-green-600 hover:text-orange-500 transition-colors">
                    <Twitter className="h-8 w-8" />
                  </a>
                  <a href="https://www.instagram.com/namrata.writer/"  target="_blank" className="text-green-600 hover:text-orange-500 transition-colors">
                    <Instagram className="h-8 w-8" />
                  </a>
                  <a href="https://www.linkedin.com/in/namrata-agarwal-bb817b13/"  target="_blank" className="text-green-600 hover:text-orange-500 transition-colors">
                    <Linkedin className="h-8 w-8" />
                  </a>

                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h3 className="font-semibold mb-4 text-gray-800">Quick Facts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📚 MISHA Series Author</li>
                  <li>🏆 Purple DragonFly Award Winner</li>
                  <li>📍 Based in New Jersey</li>
                  <li>👥 SCBWI Member</li>
                  <li>✍️ Children's Magazine Contributor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Books</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover engaging stories that educate and entertain young readers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {books.map((book) => (
              <Card key={book.id} className="bg-white border border-green-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 flex-shrink-0 px-4 lg:pl-4 lg:pr-0">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h3>
                      <div className="w-8 h-1 bg-green-600 mb-3"></div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-6">
                        {book.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <a href={book.amazonUrl} target="_blank">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white border border-green-600 w-full lg:w-auto">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Order Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Magazines Section */}
      <section id="awards" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Awards & Magazines</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-4">
              {activities.map((activity, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-green-50 border border-green-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200" />
            <CarouselNext className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200" />
          </Carousel>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Reviews</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-green-50 border border-green-100">
                    <CardContent className="p-8 text-center h-80 flex flex-col justify-between">
                      <div className="flex justify-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-green-600 text-green-600" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 mb-4 italic text-base leading-relaxed flex-1 flex items-center justify-center">
                        "{review.text}"
                      </blockquote>
                      <div className="space-y-1">
                        <cite className="text-sm font-semibold text-green-600">
                          {review.bookTitle}
                        </cite>
                        <p className="text-xs text-gray-500">
                          — {review.author}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200" />
            <CarouselNext className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section 
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              I'd love to hear from you! Whether you have questions about my books or want to arrange a school visit.
            </p>
          </div>

          <Card className="bg-white border border-green-100 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" type="text" required className="w-full bg-green-50 border-green-200 text-gray-800" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required className="w-full bg-green-50 border-green-200 text-gray-800" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" type="text" required className="w-full bg-green-50 border-green-200 text-gray-800" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={6} required className="w-full bg-green-50 border-green-200 text-gray-800" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="bg-white border-t border-green-200 text-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Namrata Agarwal</h3>
              <p className="text-gray-500 mb-4">
                Children's book writer crafting engaging stories for young minds.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#about" className="hover:text-green-700 transition-colors">About</a></li>
                <li><a href="#books" className="hover:text-green-700 transition-colors">Books</a></li>
                <li><a href="#awards" className="hover:text-green-700 transition-colors">Awards</a></li>
                <li><a href="#reviews" className="hover:text-green-700 transition-colors">Reviews</a></li>
                {/* <li><a href="#contact" className="hover:text-green-700 transition-colors">Contact</a></li> */}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/namrata.writer/"  target="_blank" className="text-green-600 hover:text-orange-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/namrata-agarwal-bb817b13/"  target="_blank" className="text-green-600 hover:text-orange-500 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://x.com/namrataagarwal"  target="_blank" className="text-green-600 hover:text-orange-500 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-200 pt-8 mt-8 text-center text-gray-500">
            <p>&copy; 2025 Namrata Agarwal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
