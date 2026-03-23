import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
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

  type OldActor = {
    supercars : Map.Map<Nat, Car>;
  };

  type NewActor = {
    supercars : Map.Map<Nat, Car>;
    inquiries : Map.Map<Nat, ContactForm>;
    nextInquiryId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    {
      old with
      inquiries = Map.empty<Nat, ContactForm>();
      nextInquiryId = 1;
    };
  };
};
