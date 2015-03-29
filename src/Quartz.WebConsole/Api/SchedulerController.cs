using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;

using Quartz.Impl;
using Quartz.Impl.Matchers;
using Quartz.Web.Api.Dto;

namespace Quartz.Web.Api
{
    /// <summary>
    /// Web API endpoint for scheduler information.
    /// </summary>
    [RoutePrefix("api/schedulers")]
    public class SchedulerController : ApiController
    {
        [HttpGet]
        [Route("")]
        public IList<SchedulerHeaderDto> AllSchedulers()
        {
            var schedulers = SchedulerRepository.Instance.LookupAll();
            return schedulers.Select(x => new SchedulerHeaderDto(x)).ToList();
        }

        [HttpGet]
        [Route("{schedulerId}")]
        public SchedulerDto SchedulerDetails(string schedulerId)
        {
            var scheduler = GetSchedulerInstance(schedulerId);
            return new SchedulerDto(scheduler);
        }

        [HttpPost]
        [Route("{schedulerId}/start")]
        public void Start(string schedulerId)
        {
            var scheduler = GetSchedulerInstance(schedulerId);
            scheduler.Start();
        }

        [HttpPost]
        [Route("{schedulerId}/standby")]
        public void Standby(string schedulerId)
        {
            var scheduler = GetSchedulerInstance(schedulerId);
            scheduler.Standby();
        }

        [HttpPost]
        [Route("{schedulerId}/shutdown")]
        public void Shutdown(string schedulerId)
        {
            var scheduler = GetSchedulerInstance(schedulerId);
            scheduler.Shutdown();
        }

        [HttpGet]
        [Route("{schedulerId}/jobs")]
        public IList<KeyDto> Jobs(string schedulerId)
        {
            var scheduler = GetSchedulerInstance(schedulerId);
            var jobKeys = scheduler.GetJobKeys(GroupMatcher<JobKey>.AnyGroup());
            return jobKeys.Select(x => new KeyDto(x)).ToList();
        }

        [HttpGet]
        [Route("{schedulerId}/triggers")]
        public IList<KeyDto> Triggers(string schedulerId)
        {
            var scheduler = GetSchedulerInstance(schedulerId);
            var jobKeys = scheduler.GetTriggerKeys(GroupMatcher<TriggerKey>.AnyGroup());
            ;
            return jobKeys.Select(x => new KeyDto(x)).ToList();
        }

        private static IScheduler GetSchedulerInstance(string id)
        {
            var scheduler = SchedulerRepository.Instance.Lookup(id);
            if (scheduler == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return scheduler;
        }
    }
}