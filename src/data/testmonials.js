export const reviewSummary = {
  platform: "Google",
  rating: 4.7,
  totalReviews: 24,
  ratingLabel: "4.7 out of 5",
  lastVerified: null,
};

export const testimonials = [];

export function getFeaturedTestimonials(limit = 6) {
  return testimonials
    .filter(
      (testimonial) =>
        testimonial.isPublished &&
        testimonial.isFeatured
    )
    .slice(0, limit);
}

export function getPublishedTestimonials() {
  return testimonials.filter(
    (testimonial) => testimonial.isPublished
  );
}

export function getTestimonialById(id) {
  return testimonials.find(
    (testimonial) => testimonial.id === id
  );
}

export default testimonials;