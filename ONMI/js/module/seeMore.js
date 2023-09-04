export const seeMore = () => {
  const roadmapContent = document.querySelector('.roadmap__content')
  const roadmapHalfItem = document.querySelector('.roadmap-item_half')
  const topParent = roadmapContent.getBoundingClientRect().top
  const topHalf = roadmapHalfItem.getBoundingClientRect().top
  const visibleHeight = topHalf - topParent - 1
  roadmapContent.style.maxHeight = `${visibleHeight}px`
}
