import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Car = {
    id : Nat;
    name : Text;
    brand : Text;
    engine : Text;
    horsepower : Nat;
    topSpeed : Nat;
    zeroToSixty : Text;
    description : Text;
    imageUrl : Text;
  };

  type ContactForm = {
    id : Nat;
    name : Text;
    phone : Text;
    message : Text;
    timestampNanos : Int;
  };

  module Car {
    public func compare(car1 : Car, car2 : Car) : Order.Order {
      Int.compare(car1.id, car2.id);
    };
  };

  module ContactForm {
    public func compareByTimestamp(a : ContactForm, b : ContactForm) : Order.Order {
      Int.compare(b.timestampNanos, a.timestampNanos);
    };
  };

  let supercars = Map.fromIter<Nat, Car>([
    (
      1,
      {
        id = 1;
        name = "Ferrari SF90 Stradale";
        brand = "Ferrari";
        engine = "4.0L V8 Hybrid";
        horsepower = 986;
        topSpeed = 211;
        zeroToSixty = "2.5s";
        description = "Ferrari's first plug-in hybrid supercar combining massive power and advanced technology.";
        imageUrl = "https://www.ferrari.com/images/auto/SF90_Stradale_Header.jpg";
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Lamborghini Aventador SVJ";
        brand = "Lamborghini";
        engine = "6.5L V12";
        horsepower = 770;
        topSpeed = 217;
        zeroToSixty = "2.8s";
        description = "Lamborghini's ultimate naturally aspirated V12 with insane performance and style.";
        imageUrl = "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/svj/overview/03_Aventador_SVJ_overview_gallery.jpg";
      },
    ),
    (
      3,
      {
        id = 3;
        name = "McLaren 720S";
        brand = "McLaren";
        engine = "4.0L V8 Twin-Turbo";
        horsepower = 710;
        topSpeed = 212;
        zeroToSixty = "2.9s";
        description = "Lightweight British supercar with amazing handling and power-to-weight ratio.";
        imageUrl = "https://cars.mclaren.com/content/dam/mclaren-automotive/images/hero/720s-hero.jpg";
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Porsche 911 GT3 RS";
        brand = "Porsche";
        engine = "4.0L Flat-6";
        horsepower = 518;
        topSpeed = 184;
        zeroToSixty = "3.0s";
        description = "Track-focused version of the iconic 911 with race car technology.";
        imageUrl = "https://files.porsche.com/filestore/image/multimedia/none/992-gt3rs-modelimage-sideshot/thumbwhite/d2e6e8b3-3c10-11ed-80c9-005056bbdc38;sN;twebp/porsche-thumbwhite.webp";
      },
    ),
    (
      5,
      {
        id = 5;
        name = "Bugatti Chiron";
        brand = "Bugatti";
        engine = "8.0L W16 Quad-Turbo";
        horsepower = 1500;
        topSpeed = 261;
        zeroToSixty = "2.4s";
        description = "The ultimate hypercar with enormous power and luxury fused together.";
        imageUrl = "https://www.bugatti.com/fileadmin/_processed_/sei/p54/bugatti-chiron-profilee-slider-thumb-01_01fbe5f7ef.jpg";
      },
    ),
    (
      6,
      {
        id = 6;
        name = "Koenigsegg Regera";
        brand = "Koenigsegg";
        engine = "5.0L V8 Hybrid";
        horsepower = 1500;
        topSpeed = 250;
        zeroToSixty = "2.8s";
        description = "Swedish hypercar with revolutionary single-speed transmission and hybrid power.";
        imageUrl = "https://www.koenigsegg.com/uploads/images/_1920x1080_crop_center-center_82_none/Sky_Gold_Carousel.jpg";
      },
    ),
  ].values());

  let inquiries = Map.empty<Nat, ContactForm>();
  var nextInquiryId = 1;
  let admin = Principal.fromText("2vxsx-fae");

  public query ({ caller }) func getAllCars() : async [Car] {
    supercars.values().toArray().sort();
  };

  public query ({ caller }) func getCarById(id : Nat) : async Car {
    switch (supercars.get(id)) {
      case (null) { Runtime.trap("Car not found in collection") };
      case (?car) { car };
    };
  };

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, message : Text) : async Nat {
    let newInquiry : ContactForm = {
      id = nextInquiryId;
      name;
      phone;
      message;
      timestampNanos = Time.now();
    };
    inquiries.add(nextInquiryId, newInquiry);
    nextInquiryId += 1;
    newInquiry.id;
  };

  public query ({ caller }) func getAllInquiries() : async [ContactForm] {
    if (caller == admin) {
      inquiries.values().toArray().sort(ContactForm.compareByTimestamp);
    } else {
      Runtime.trap("Only admin can view all inquiries.");
    };
  };

  public query ({ caller }) func getInquiryById(id : Nat) : async ?ContactForm {
    inquiries.get(id);
  };

  public shared ({ caller }) func updateInquiry(id : Nat, name : Text, phone : Text, message : Text) : async () {
    switch (inquiries.get(id)) {
      case (null) {
        Runtime.trap("Inquiry not found");
      };
      case (?existingInquiry) {
        let updatedInquiry : ContactForm = {
          existingInquiry with
          name;
          phone;
          message;
          timestampNanos = Time.now();
        };
        inquiries.add(id, updatedInquiry);
      };
    };
  };

  public shared ({ caller }) func deleteInquiry(id : Nat) : async () {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (_) { inquiries.remove(id) };
    };
  };
};
