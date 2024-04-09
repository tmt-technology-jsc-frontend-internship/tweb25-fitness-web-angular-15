export interface BlogCard  {
    img: string,
    title: string,
    id: string | number,
    time?: string,
    intro?: string,
    alt?: string,
  }

  export interface PositionInfo  {
    position: string,
    number: number,
    wayToWork: string,
    place: string,
    link: string
  }
  
  export interface PositionInfoTitle  {
    icon: string,
    title: string
  }
  
  export interface selectBox  {
    name: string,
    id: string,
    optionDefault: string,
    options: Array<string>
  }
  
  export interface PaginationItem  {
    pageId: number,
    pageNumber: number,
    param: string,
  }

  export interface SubscriptionCard {
    month: number,
    total: number,
    perMonth: number,
    describe: string
  }
  
  export interface ScheduleItem {
    link: string,
    img: string,
  
  }